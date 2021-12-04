// https://www.terraform.io/docs/providers/kubernetes/r/secret_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretV1Config extends cdktf.TerraformMetaArguments {
  /**
  * A map of the secret data in base64 encoding. Use this for binary data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/secret_v1.html#binary_data SecretV1#binary_data}
  */
  readonly binaryData?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * A map of the secret data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/secret_v1.html#data SecretV1#data}
  */
  readonly data?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Ensures that data stored in the Secret cannot be updated (only object metadata can be modified).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/secret_v1.html#immutable SecretV1#immutable}
  */
  readonly immutable?: boolean | cdktf.IResolvable;
  /**
  * Type of secret
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/secret_v1.html#type SecretV1#type}
  */
  readonly type?: string;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/secret_v1.html#metadata SecretV1#metadata}
  */
  readonly metadata: SecretV1Metadata;
}
export interface SecretV1Metadata {
  /**
  * An unstructured key value map stored with the secret that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/secret_v1.html#annotations SecretV1#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/secret_v1.html#generate_name SecretV1#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the secret. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/secret_v1.html#labels SecretV1#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the secret, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/secret_v1.html#name SecretV1#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the secret must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/secret_v1.html#namespace SecretV1#namespace}
  */
  readonly namespace?: string;
}

export function secretV1MetadataToTerraform(struct?: SecretV1MetadataOutputReference | SecretV1Metadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class SecretV1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecretV1Metadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._generateName) {
      hasAnyValues = true;
      internalValueResult.generateName = this._generateName;
    }
    if (this._labels) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretV1Metadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._generateName = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._generateName = value.generateName;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/secret_v1.html kubernetes_secret_v1}
*/
export class SecretV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_secret_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/secret_v1.html kubernetes_secret_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretV1Config
  */
  public constructor(scope: Construct, id: string, config: SecretV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_secret_v1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._binaryData = config.binaryData;
    this._data = config.data;
    this._immutable = config.immutable;
    this._type = config.type;
    this._metadata.internalValue = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binary_data - computed: false, optional: true, required: false
  private _binaryData?: { [key: string]: string } | cdktf.IResolvable; 
  public get binaryData() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('binary_data') as any;
  }
  public set binaryData(value: { [key: string]: string } | cdktf.IResolvable) {
    this._binaryData = value;
  }
  public resetBinaryData() {
    this._binaryData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryDataInput() {
    return this._binaryData;
  }

  // data - computed: true, optional: true, required: false
  private _data?: { [key: string]: string } | cdktf.IResolvable; 
  public get data() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('data') as any;
  }
  public set data(value: { [key: string]: string } | cdktf.IResolvable) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // immutable - computed: false, optional: true, required: false
  private _immutable?: boolean | cdktf.IResolvable; 
  public get immutable() {
    return this.getBooleanAttribute('immutable') as any;
  }
  public set immutable(value: boolean | cdktf.IResolvable) {
    this._immutable = value;
  }
  public resetImmutable() {
    this._immutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immutableInput() {
    return this._immutable;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new SecretV1MetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SecretV1Metadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      binary_data: cdktf.hashMapper(cdktf.anyToTerraform)(this._binaryData),
      data: cdktf.hashMapper(cdktf.anyToTerraform)(this._data),
      immutable: cdktf.booleanToTerraform(this._immutable),
      type: cdktf.stringToTerraform(this._type),
      metadata: secretV1MetadataToTerraform(this._metadata.internalValue),
    };
  }
}
