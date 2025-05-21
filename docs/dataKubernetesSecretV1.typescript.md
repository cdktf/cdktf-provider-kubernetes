# `dataKubernetesSecretV1` Submodule <a name="`dataKubernetesSecretV1` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesSecretV1 <a name="DataKubernetesSecretV1" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/data-sources/secret_v1 kubernetes_secret_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.Initializer"></a>

```typescript
import { dataKubernetesSecretV1 } from '@cdktf/provider-kubernetes'

new dataKubernetesSecretV1.DataKubernetesSecretV1(scope: Construct, id: string, config: DataKubernetesSecretV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config">DataKubernetesSecretV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config">DataKubernetesSecretV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.resetBinaryData">resetBinaryData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.putMetadata"></a>

```typescript
public putMetadata(value: DataKubernetesSecretV1Metadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Metadata">DataKubernetesSecretV1Metadata</a>

---

##### `resetBinaryData` <a name="resetBinaryData" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.resetBinaryData"></a>

```typescript
public resetBinaryData(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataKubernetesSecretV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.isConstruct"></a>

```typescript
import { dataKubernetesSecretV1 } from '@cdktf/provider-kubernetes'

dataKubernetesSecretV1.DataKubernetesSecretV1.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.isTerraformElement"></a>

```typescript
import { dataKubernetesSecretV1 } from '@cdktf/provider-kubernetes'

dataKubernetesSecretV1.DataKubernetesSecretV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.isTerraformDataSource"></a>

```typescript
import { dataKubernetesSecretV1 } from '@cdktf/provider-kubernetes'

dataKubernetesSecretV1.DataKubernetesSecretV1.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.generateConfigForImport"></a>

```typescript
import { dataKubernetesSecretV1 } from '@cdktf/provider-kubernetes'

dataKubernetesSecretV1.DataKubernetesSecretV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataKubernetesSecretV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataKubernetesSecretV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataKubernetesSecretV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/data-sources/secret_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesSecretV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.data">data</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.immutable">immutable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference">DataKubernetesSecretV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.binaryDataInput">binaryDataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Metadata">DataKubernetesSecretV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.binaryData">binaryData</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.data"></a>

```typescript
public readonly data: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `immutable`<sup>Required</sup> <a name="immutable" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.immutable"></a>

```typescript
public readonly immutable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.metadata"></a>

```typescript
public readonly metadata: DataKubernetesSecretV1MetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference">DataKubernetesSecretV1MetadataOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `binaryDataInput`<sup>Optional</sup> <a name="binaryDataInput" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.binaryDataInput"></a>

```typescript
public readonly binaryDataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.metadataInput"></a>

```typescript
public readonly metadataInput: DataKubernetesSecretV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Metadata">DataKubernetesSecretV1Metadata</a>

---

##### `binaryData`<sup>Required</sup> <a name="binaryData" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.binaryData"></a>

```typescript
public readonly binaryData: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesSecretV1Config <a name="DataKubernetesSecretV1Config" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.Initializer"></a>

```typescript
import { dataKubernetesSecretV1 } from '@cdktf/provider-kubernetes'

const dataKubernetesSecretV1Config: dataKubernetesSecretV1.DataKubernetesSecretV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Metadata">DataKubernetesSecretV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.binaryData">binaryData</a></code> | <code>{[ key: string ]: string}</code> | A map of the secret data with values encoded in base64 format. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/data-sources/secret_v1#id DataKubernetesSecretV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.metadata"></a>

```typescript
public readonly metadata: DataKubernetesSecretV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Metadata">DataKubernetesSecretV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/data-sources/secret_v1#metadata DataKubernetesSecretV1#metadata}

---

##### `binaryData`<sup>Optional</sup> <a name="binaryData" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.binaryData"></a>

```typescript
public readonly binaryData: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of the secret data with values encoded in base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/data-sources/secret_v1#binary_data DataKubernetesSecretV1#binary_data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/data-sources/secret_v1#id DataKubernetesSecretV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataKubernetesSecretV1Metadata <a name="DataKubernetesSecretV1Metadata" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Metadata.Initializer"></a>

```typescript
import { dataKubernetesSecretV1 } from '@cdktf/provider-kubernetes'

const dataKubernetesSecretV1Metadata: dataKubernetesSecretV1.DataKubernetesSecretV1Metadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Metadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the secret that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Metadata.property.generateName">generateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Metadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the secret. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Metadata.property.name">name</a></code> | <code>string</code> | Name of the secret, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Metadata.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the secret must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Metadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the secret that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/data-sources/secret_v1#annotations DataKubernetesSecretV1#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Metadata.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/data-sources/secret_v1#generate_name DataKubernetesSecretV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Metadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the secret.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/data-sources/secret_v1#labels DataKubernetesSecretV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Metadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the secret, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/data-sources/secret_v1#name DataKubernetesSecretV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Metadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the space within which name of the secret must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/data-sources/secret_v1#namespace DataKubernetesSecretV1#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesSecretV1MetadataOutputReference <a name="DataKubernetesSecretV1MetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.Initializer"></a>

```typescript
import { dataKubernetesSecretV1 } from '@cdktf/provider-kubernetes'

new dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.resetGenerateName"></a>

```typescript
public resetGenerateName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.generateName">generateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Metadata">DataKubernetesSecretV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.generateNameInput"></a>

```typescript
public readonly generateNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1MetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataKubernetesSecretV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesSecretV1.DataKubernetesSecretV1Metadata">DataKubernetesSecretV1Metadata</a>

---



