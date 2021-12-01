// https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultServiceAccountV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic mounting of the service account token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1.html#automount_service_account_token DefaultServiceAccountV1#automount_service_account_token}
  */
  readonly automountServiceAccountToken?: boolean | cdktf.IResolvable;
  /**
  * image_pull_secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1.html#image_pull_secret DefaultServiceAccountV1#image_pull_secret}
  */
  readonly imagePullSecret?: DefaultServiceAccountV1ImagePullSecret[];
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1.html#metadata DefaultServiceAccountV1#metadata}
  */
  readonly metadata: DefaultServiceAccountV1Metadata;
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1.html#secret DefaultServiceAccountV1#secret}
  */
  readonly secret?: DefaultServiceAccountV1Secret[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1.html#timeouts DefaultServiceAccountV1#timeouts}
  */
  readonly timeouts?: DefaultServiceAccountV1Timeouts;
}
export interface DefaultServiceAccountV1ImagePullSecret {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1.html#name DefaultServiceAccountV1#name}
  */
  readonly name?: string;
}

function defaultServiceAccountV1ImagePullSecretToTerraform(struct?: DefaultServiceAccountV1ImagePullSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DefaultServiceAccountV1Metadata {
  /**
  * An unstructured key value map stored with the service account that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1.html#annotations DefaultServiceAccountV1#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the service account. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1.html#labels DefaultServiceAccountV1#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the service account, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1.html#name DefaultServiceAccountV1#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the service account must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1.html#namespace DefaultServiceAccountV1#namespace}
  */
  readonly namespace?: string;
}

function defaultServiceAccountV1MetadataToTerraform(struct?: DefaultServiceAccountV1MetadataOutputReference | DefaultServiceAccountV1Metadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DefaultServiceAccountV1MetadataOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
  }
}
export interface DefaultServiceAccountV1Secret {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1.html#name DefaultServiceAccountV1#name}
  */
  readonly name?: string;
}

function defaultServiceAccountV1SecretToTerraform(struct?: DefaultServiceAccountV1Secret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DefaultServiceAccountV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1.html#create DefaultServiceAccountV1#create}
  */
  readonly create?: string;
}

function defaultServiceAccountV1TimeoutsToTerraform(struct?: DefaultServiceAccountV1TimeoutsOutputReference | DefaultServiceAccountV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class DefaultServiceAccountV1TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1.html kubernetes_default_service_account_v1}
*/
export class DefaultServiceAccountV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_default_service_account_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1.html kubernetes_default_service_account_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultServiceAccountV1Config
  */
  public constructor(scope: Construct, id: string, config: DefaultServiceAccountV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_default_service_account_v1',
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
  private _automountServiceAccountToken?: boolean | cdktf.IResolvable | undefined; 
  public get automountServiceAccountToken() {
    return this.getBooleanAttribute('automount_service_account_token') as any;
  }
  public set automountServiceAccountToken(value: boolean | cdktf.IResolvable | undefined) {
    this._automountServiceAccountToken = value;
  }
  public resetAutomountServiceAccountToken() {
    this._automountServiceAccountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automountServiceAccountTokenInput() {
    return this._automountServiceAccountToken
  }

  // default_secret_name - computed: true, optional: false, required: false
  public get defaultSecretName() {
    return this.getStringAttribute('default_secret_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_pull_secret - computed: false, optional: true, required: false
  private _imagePullSecret?: DefaultServiceAccountV1ImagePullSecret[] | undefined; 
  public get imagePullSecret() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('image_pull_secret') as any;
  }
  public set imagePullSecret(value: DefaultServiceAccountV1ImagePullSecret[] | undefined) {
    this._imagePullSecret = value;
  }
  public resetImagePullSecret() {
    this._imagePullSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretInput() {
    return this._imagePullSecret
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata?: DefaultServiceAccountV1Metadata; 
  private __metadataOutput = new DefaultServiceAccountV1MetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this.__metadataOutput;
  }
  public putMetadata(value: DefaultServiceAccountV1Metadata) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: DefaultServiceAccountV1Secret[] | undefined; 
  public get secret() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret') as any;
  }
  public set secret(value: DefaultServiceAccountV1Secret[] | undefined) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DefaultServiceAccountV1Timeouts | undefined; 
  private __timeoutsOutput = new DefaultServiceAccountV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DefaultServiceAccountV1Timeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automount_service_account_token: cdktf.booleanToTerraform(this._automountServiceAccountToken),
      image_pull_secret: cdktf.listMapper(defaultServiceAccountV1ImagePullSecretToTerraform)(this._imagePullSecret),
      metadata: defaultServiceAccountV1MetadataToTerraform(this._metadata),
      secret: cdktf.listMapper(defaultServiceAccountV1SecretToTerraform)(this._secret),
      timeouts: defaultServiceAccountV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
