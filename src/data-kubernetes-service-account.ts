// https://www.terraform.io/docs/providers/kubernetes/r/data_kubernetes_service_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubernetesServiceAccountConfig extends cdktf.TerraformMetaArguments {
  /** metadata block */
  readonly metadata: DataKubernetesServiceAccountMetadata[];
}
export class DataKubernetesServiceAccountImagePullSecret extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataKubernetesServiceAccountSecret extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataKubernetesServiceAccountMetadata {
  /** An unstructured key value map stored with the service account that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the service account. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the service account, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the service account must be unique. */
  readonly namespace?: string;
}

function dataKubernetesServiceAccountMetadataToTerraform(struct?: DataKubernetesServiceAccountMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


// Resource

export class DataKubernetesServiceAccount extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataKubernetesServiceAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_service_account',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automount_service_account_token - computed: true, optional: false, required: false
  public get automountServiceAccountToken() {
    return this.getBooleanAttribute('automount_service_account_token');
  }

  // default_secret_name - computed: true, optional: false, required: false
  public get defaultSecretName() {
    return this.getStringAttribute('default_secret_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_pull_secret - computed: true, optional: false, required: false
  public imagePullSecret(index: string) {
    return new DataKubernetesServiceAccountImagePullSecret(this, 'image_pull_secret', index);
  }

  // secret - computed: true, optional: false, required: false
  public secret(index: string) {
    return new DataKubernetesServiceAccountSecret(this, 'secret', index);
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: DataKubernetesServiceAccountMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: DataKubernetesServiceAccountMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: cdktf.listMapper(dataKubernetesServiceAccountMetadataToTerraform)(this._metadata),
    };
  }
}
