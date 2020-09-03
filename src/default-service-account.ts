// https://www.terraform.io/docs/providers/kubernetes/r/default_service_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DefaultServiceAccountConfig extends TerraformMetaArguments {
  /** True to enable automatic mounting of the service account token */
  readonly automountServiceAccountToken?: boolean;
  /** image_pull_secret block */
  readonly imagePullSecret?: DefaultServiceAccountImagePullSecret[];
  /** metadata block */
  readonly metadata: DefaultServiceAccountMetadata[];
  /** secret block */
  readonly secret?: DefaultServiceAccountSecret[];
  /** timeouts block */
  readonly timeouts?: DefaultServiceAccountTimeouts;
}
export interface DefaultServiceAccountImagePullSecret {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}
export interface DefaultServiceAccountMetadata {
  /** An unstructured key value map stored with the service account that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the service account. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the service account, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the service account must be unique. */
  readonly namespace?: string;
}
export interface DefaultServiceAccountSecret {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}
export interface DefaultServiceAccountTimeouts {
  readonly create?: string;
}

// Resource

export class DefaultServiceAccount extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DefaultServiceAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_default_service_account',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automountServiceAccountToken = config.automountServiceAccountToken;
    this._imagePullSecret = config.imagePullSecret;
    this._metadata = config.metadata;
    this._secret = config.secret;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automount_service_account_token - computed: false, optional: true, required: false
  private _automountServiceAccountToken?: boolean;
  public get automountServiceAccountToken() {
    return this._automountServiceAccountToken;
  }
  public set automountServiceAccountToken(value: boolean | undefined) {
    this._automountServiceAccountToken = value;
  }

  // default_secret_name - computed: true, optional: false, required: true
  public get defaultSecretName() {
    return this.getStringAttribute('default_secret_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_pull_secret - computed: false, optional: true, required: false
  private _imagePullSecret?: DefaultServiceAccountImagePullSecret[];
  public get imagePullSecret() {
    return this._imagePullSecret;
  }
  public set imagePullSecret(value: DefaultServiceAccountImagePullSecret[] | undefined) {
    this._imagePullSecret = value;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: DefaultServiceAccountMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: DefaultServiceAccountMetadata[]) {
    this._metadata = value;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: DefaultServiceAccountSecret[];
  public get secret() {
    return this._secret;
  }
  public set secret(value: DefaultServiceAccountSecret[] | undefined) {
    this._secret = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DefaultServiceAccountTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DefaultServiceAccountTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automount_service_account_token: this._automountServiceAccountToken,
      image_pull_secret: this._imagePullSecret,
      metadata: this._metadata,
      secret: this._secret,
      timeouts: this._timeouts,
    };
  }
}
