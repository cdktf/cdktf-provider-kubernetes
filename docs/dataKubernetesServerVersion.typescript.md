# `dataKubernetesServerVersion` Submodule <a name="`dataKubernetesServerVersion` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesServerVersion <a name="DataKubernetesServerVersion" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/data-sources/server_version kubernetes_server_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.Initializer"></a>

```typescript
import { dataKubernetesServerVersion } from '@cdktf/provider-kubernetes'

new dataKubernetesServerVersion.DataKubernetesServerVersion(scope: Construct, id: string, config?: DataKubernetesServerVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig">DataKubernetesServerVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig">DataKubernetesServerVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataKubernetesServerVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.isConstruct"></a>

```typescript
import { dataKubernetesServerVersion } from '@cdktf/provider-kubernetes'

dataKubernetesServerVersion.DataKubernetesServerVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.isTerraformElement"></a>

```typescript
import { dataKubernetesServerVersion } from '@cdktf/provider-kubernetes'

dataKubernetesServerVersion.DataKubernetesServerVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.isTerraformDataSource"></a>

```typescript
import { dataKubernetesServerVersion } from '@cdktf/provider-kubernetes'

dataKubernetesServerVersion.DataKubernetesServerVersion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.generateConfigForImport"></a>

```typescript
import { dataKubernetesServerVersion } from '@cdktf/provider-kubernetes'

dataKubernetesServerVersion.DataKubernetesServerVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataKubernetesServerVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataKubernetesServerVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataKubernetesServerVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/data-sources/server_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesServerVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.buildDate">buildDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.compiler">compiler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.gitCommit">gitCommit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.gitTreeState">gitTreeState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.gitVersion">gitVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.goVersion">goVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.major">major</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.minor">minor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `buildDate`<sup>Required</sup> <a name="buildDate" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.buildDate"></a>

```typescript
public readonly buildDate: string;
```

- *Type:* string

---

##### `compiler`<sup>Required</sup> <a name="compiler" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.compiler"></a>

```typescript
public readonly compiler: string;
```

- *Type:* string

---

##### `gitCommit`<sup>Required</sup> <a name="gitCommit" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.gitCommit"></a>

```typescript
public readonly gitCommit: string;
```

- *Type:* string

---

##### `gitTreeState`<sup>Required</sup> <a name="gitTreeState" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.gitTreeState"></a>

```typescript
public readonly gitTreeState: string;
```

- *Type:* string

---

##### `gitVersion`<sup>Required</sup> <a name="gitVersion" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.gitVersion"></a>

```typescript
public readonly gitVersion: string;
```

- *Type:* string

---

##### `goVersion`<sup>Required</sup> <a name="goVersion" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.goVersion"></a>

```typescript
public readonly goVersion: string;
```

- *Type:* string

---

##### `major`<sup>Required</sup> <a name="major" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.major"></a>

```typescript
public readonly major: string;
```

- *Type:* string

---

##### `minor`<sup>Required</sup> <a name="minor" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.minor"></a>

```typescript
public readonly minor: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesServerVersionConfig <a name="DataKubernetesServerVersionConfig" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.Initializer"></a>

```typescript
import { dataKubernetesServerVersion } from '@cdktf/provider-kubernetes'

const dataKubernetesServerVersionConfig: dataKubernetesServerVersion.DataKubernetesServerVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/data-sources/server_version#id DataKubernetesServerVersion#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/data-sources/server_version#id DataKubernetesServerVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



